import type { JSAnimation, Timeline } from 'animejs'

type Job = Pick<JSAnimation, 'cancel'> | Pick<Timeline, 'cancel'>

export function useAnimeJob() {
  const jobs = new Map<string, Job>()

  function play<T extends Job>(slot: string, job: T) {
    jobs.get(slot)?.cancel()
    jobs.set(slot, job)
    return job
  }

  function stop(slot?: string) {
    if (slot) {
      jobs.get(slot)?.cancel()
      jobs.delete(slot)
      return
    }
    for (const job of jobs.values()) job.cancel()
    jobs.clear()
  }

  onUnmounted(() => stop())

  return { play, stop }
}
