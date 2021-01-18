// const suspensePromise = promise => {
//      let result;
//      let status = 'pending';
//      const suspender = promise.then(response => {
//          status = 'success';
//          result = response;
//      }, error => {
//          status = 'error';
//          result = error;
//      });

//    return () => {
//        switch(status) {
//            case 'pending':
//                throw suspender;
//            case 'error':
//                throw result;
//            default:
//                return result;
//        }
//   };
//  }
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
export default wrapPromise
