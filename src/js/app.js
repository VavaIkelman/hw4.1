export default function showCurrentHelth(persent) {
    let healthType;
    if (persent >= 50) healthType = "healthy";
    else if (persent > 15 & persent < 50) healthType = "wounded";
    else if (persent < 15) healthType = "critical";

    return healthType;
}
// const heroes = [
//     {name: 'мечник', health: 10},
//     {name: 'маг', health: 100},
//     {name: 'лучник', health: 35},
//   ];