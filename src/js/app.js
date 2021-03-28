export default function showCurrentHelth(hero) {
    let currentHealth = '';
    if (hero.health > 50){
       currentHealth = 'healthy';
    }else if (hero.health > 14 && hero.health < 51) {
        currentHealth = 'wounded';
    } else {
        currentHealth = 'critical';
    }

    return currentHealth;
}