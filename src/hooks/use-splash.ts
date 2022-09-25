import { useSyncExternalStore, useCallback } from "react";

function createSplashStore(initial = true) {
  let state = initial;
  let subscribers = new Set<(state: boolean) => void>();
  return {
    get: () => state,
    set: (newState: boolean) => {
      state = newState;
      subscribers.forEach((cb) => cb(newState));
    },
    subscribe: (cb: (state: boolean) => void) => {
      subscribers.add(cb);
      return () => void subscribers.delete(cb);
    },
  };
}

const splashStore = createSplashStore();

export default function useSplash() {
  const isSplashed = useSyncExternalStore(
    splashStore.subscribe,
    splashStore.get,
    () => true
  );

  const removeSplash = useCallback(() => {
    splashStore.set(false);
  }, []);

  return { isSplashed, removeSplash };
}
