import { useEffect, useRef } from 'react';

/*
DOCS
  usePrevious is a hook that allows you to access old state/props, allowing us to use useEffect like the old way we used to use
  ComponentDidUpdate (prevProps, prevState)

  example:
    const [stateVal, setStateVal] = useState('')

    const prevStateVal = usePrevious(stateVal)

    useEffect(() => {
      // direct comparisons between stateVal and prevStateVal
    })

  arg: any value you would like to persist through re renders

  returns: the previous value of the input arg.

*/

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
