import showCurrentHelth from "../js/app.js";

test ('check healthy', () => {
const hero = {
    name: 'Маг',
    health: 90,
}

expect(showCurrentHelth(her)).toBe('healthy');
});

test ('check healthy', () => {
    const hero = {
        name: 'Воин',
        health: 51,
    }
    
    expect(showCurrentHelth(hero)).toBe('healthy');
});

test ('check wounded', () => {
    const hero = {
        name: 'Воин',
        health: 49,
    }
    
    expect(showCurrentHelth(hero)).toBe('wounded');
});

test ('check wounded', () => {
    const hero = {
        name: 'Воин',
        health: 15,
    }
    
    expect(showCurrentHelth(hero)).toBe('wounded');
});

test ('check critical', () => {
    const hero = {
        name: 'Воин',
        health: 14,
    }
    
    expect(showCurrentHelth(hero)).toBe('critical');
});
