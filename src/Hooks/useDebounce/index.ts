import { useEffect } from 'react';
import useTimeout from '../useTimeout';

export default function useDebounce<T, T1>(callback: T, delay: number, dependencies: T1[]) {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
