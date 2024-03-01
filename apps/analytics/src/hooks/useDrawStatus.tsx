import { PrizePool } from '@generationsoftware/hyperstructure-client-js'
import {
  useDrawAuctionDuration,
  useDrawPeriod,
  useFirstDrawOpenedAt
} from '@generationsoftware/hyperstructure-react-hooks'
import { DrawStatus } from '@shared/types'
import { getSecondsSinceEpoch } from '@shared/utilities'
import { useMemo } from 'react'
import { useRngTxs } from './useRngTxs'

export const useDrawStatus = (prizePool: PrizePool, drawId: number) => {
  const { data: firstDrawOpenedAt, isFetched: isFetchedFirstDrawOpenedAt } =
    useFirstDrawOpenedAt(prizePool)
  const { data: drawPeriod, isFetched: isFetchedDrawPeriod } = useDrawPeriod(prizePool)
  const { data: drawAuctionDuration, isFetched: isFetchedDrawAuctionDuration } =
    useDrawAuctionDuration(prizePool)

  const { data: allRngTxs, isFetched: isFetchedAllRngTxs, refetch } = useRngTxs(prizePool)

  const isFetched =
    !!drawId &&
    isFetchedFirstDrawOpenedAt &&
    isFetchedDrawPeriod &&
    isFetchedDrawAuctionDuration &&
    isFetchedAllRngTxs

  const data = useMemo(() => {
    if (isFetched && !!firstDrawOpenedAt && !!drawPeriod && !!drawAuctionDuration && !!allRngTxs) {
      const rngTxs = allRngTxs.find((txs) => txs.rngAuction.drawId === drawId)

      const openedAt = firstDrawOpenedAt + drawPeriod * (drawId - 1)
      const closedAt = openedAt + drawPeriod
      const rngCompletedAt = rngTxs?.rngAuction.timestamp
      const awardedAt = rngTxs?.drawAward?.timestamp
      const finalizedAt = closedAt + drawPeriod

      const currentTime = getSecondsSinceEpoch()
      const isClosed = currentTime >= closedAt
      const isAwarded = !!awardedAt
      const isFinalized = currentTime >= finalizedAt

      const status: DrawStatus = isFinalized
        ? 'finalized'
        : isAwarded
        ? 'awarded'
        : isClosed
        ? 'closed'
        : 'open'

      const currentAuctionClosesAt = !!rngCompletedAt
        ? rngCompletedAt + drawAuctionDuration
        : closedAt + drawAuctionDuration
      const isSkipped =
        (status === 'finalized' && !isAwarded) ||
        (status === 'closed' && currentTime >= currentAuctionClosesAt)

      return {
        status,
        openedAt,
        closedAt,
        awardedAt,
        finalizedAt,
        isSkipped
      }
    }
  }, [drawId, firstDrawOpenedAt, drawPeriod, drawAuctionDuration, allRngTxs, isFetched])

  return { ...data, isFetched, refetch }
}
