const carPark = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const totalLvl = carPark.length;
const totalParkingSlot = carPark[0].length;

for (let i = 0; i < totalLvl; i++) {
  for (let k = 1; k < totalParkingSlot; k++) {}
}

const sPosition = carPark.some((pos) => {
  const index = pos.filter((lvl, index) => {
    if (lvl === 2) {
      return index;
    }
  });
  return pos[index];
}, []);

console.log(sPosition);
