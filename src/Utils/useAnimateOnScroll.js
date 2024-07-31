
import { useInView } from 'react-intersection-observer';
import { useSpring } from 'react-spring';

const useAnimateOnScroll = ({ triggerOnce = true, threshold = 0.1, animationProps }) => {
  const [ref, inView] = useInView({ triggerOnce, threshold });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    ...animationProps(inView), // Use a function to dynamically apply animation properties
  });

  return [ref, props];
};

export default useAnimateOnScroll;
