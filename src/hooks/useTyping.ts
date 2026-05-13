import { useState, useEffect } from 'react';

interface TypingState {
  wordIdx: number;
  charIdx: number;
  deleting: boolean;
}

export function useTyping(words: string[], speed = 80, pause = 2400): string {
  const [state, setState] = useState<TypingState>({ wordIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    const word = words[state.wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!state.deleting && state.charIdx < word.length) {
      timeout = setTimeout(
        () => setState((s) => ({ ...s, charIdx: s.charIdx + 1 })),
        speed,
      );
    } else if (!state.deleting && state.charIdx === word.length) {
      timeout = setTimeout(() => setState((s) => ({ ...s, deleting: true })), pause);
    } else if (state.deleting && state.charIdx > 0) {
      timeout = setTimeout(
        () => setState((s) => ({ ...s, charIdx: s.charIdx - 1 })),
        speed / 2,
      );
    } else {
      setState({ wordIdx: (state.wordIdx + 1) % words.length, charIdx: 0, deleting: false });
    }

    return () => clearTimeout(timeout);
  }, [state, words, speed, pause]);

  return words[state.wordIdx].slice(0, state.charIdx);
}
