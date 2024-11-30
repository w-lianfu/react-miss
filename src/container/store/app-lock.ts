import { observable, action } from 'mobx';

const lock = observable({
  isLock: false,
});

const toggleLock = action((isLock: boolean) => {
  lock.isLock = isLock;
});

export { toggleLock };
export default lock;
