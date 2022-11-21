export const useDispatchGlobal = () => {
  return function (action) {
    window.api.synchronizeStore(action);
  };
};
