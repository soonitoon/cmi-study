let currentObserver = null;

const limitRenderInternal = (renderFn) => {
  let requestId = null;
  return () => {
    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(renderFn);
  };
};

export const observe = (renderFn) => {
  currentObserver = limitRenderInternal(renderFn);
  renderFn();
  currentObserver = null;
};

export const observable = (obj) => {
  const observerMap = {};

  return new Proxy(obj, {
    get(target, property) {
      observerMap[property] = observerMap[property] || new Set();
      if (currentObserver) {
        observerMap[property].add(currentObserver);
      }

      return target[property];
    },

    set(target, property, value) {
      target[property] = value;
      observerMap[property].forEach((renderFn) => {
        renderFn();
      });
      return true;
    },
  });
};
