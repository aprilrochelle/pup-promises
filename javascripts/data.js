const domString = require('./dom');

// const getAllPups = () => {
//   let pups = [];
//   $.get('../db/pup1.json')
//     .done((data1) => {
//       pups = data1.pup1;
//       $.get('../db/pup2.json')
//         .done((data2) => {
//           pups = [...pups, ...data2.pup2,];
//           $.get('../db/pup3.json')
//             .done((data3) => {
//               pups = [...pups, ...data3.pup3,];
//               domString(pups);
//             })
//             .fail((error3) => {
//               console.error(error3);
//             });
//         })
//         .fail((error2) => {
//           console.error(error2);
//         });
//     })
//     .fail((error1) => {
//       console.error(error1);
//     });
// };

const firstPupJson = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/pup1.json')
      .done((data) => {
        resolve(data.pup1);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const secondPupJson = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/pup2.json')
      .done((data) => {
        resolve(data.pup2);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const thirdPupJson = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/pup3.json')
      .done((data) => {
        resolve(data.pup3);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const firstFoodJson = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/food1.json')
      .done((data) => {
        resolve(data.food1);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const secondFoodJson = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/food2.json')
      .done((data) => {
        resolve(data.food2);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const thirdFoodJson = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/food3.json')
      .done((data) => {
        resolve(data.food3);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

// const getAllPups = () => {
//   let dogs = [];
//   return firstPupJson()
//     .then((result) => {
//       dogs = [...result,];
//       return secondPupJson();
//     }).then((result2) => {
//       dogs = [...dogs, ...result2,];
//       return thirdPupJson();
//     }).then((result3) => {
//       dogs = [...dogs, ...result3,];
//       return Promise.resolve(dogs);
//     }).catch((errorMsg) => {
//       console.error(errorMsg);
//     });
// };

const getAllPups = () => {
  return Promise.all([firstPupJson(), secondPupJson(), thirdPupJson(),])
    .then((results) => {
      const dogs = [...results[0], ...results[1], ...results[2],];
      return Promise.resolve(dogs);
    }).catch((error) => {

    });
};

const singlePup = () => {
  let pup = {};
  getAllPups().then((pups) => {
    pup = pups[0];
    return Promise.all([firstFoodJson(), secondFoodJson(), thirdFoodJson(),]);
  }).then((foodz) => {
    pup.favFoods = foodz;
  });
};

const initializer = () => {
  getAllPups().then((dogs) => {
    domString(dogs);
  });
  singlePup();
};

module.exports = {
  initializer,
  singlePup,
};
