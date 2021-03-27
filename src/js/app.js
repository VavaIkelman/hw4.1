export default function showCurrentHelth(obj) {
    let healthType;
    if (obj.health > 50) healthType = "healthy";
    else if (obj.health < 15) healthType = "critical";
    else healthType = "wounded";

    return healthType;
}