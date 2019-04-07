export const age = (planet, time) => {
    switch (planet) {
        case 'earth':
            return Math.round(time / 31557600 * 100) / 100;
        case 'mercury':
            return Math.round(time / (0.2408467 * 31557600) * 100) / 100;
        case 'venus':
            return Math.round(time / (0.61519726 * 31557600) * 100) / 100;
        case 'mars':
            return Math.round(time / (1.8808158 * 31557600) * 100) / 100;
        case 'jupiter':
            return Math.round(time / (11.86261 * 31557600) * 100) / 100;
        case 'saturn':
            return Math.round(time / (29.447498 * 31557600) * 100) / 100;
        case 'uranus':
            return Math.round(time / (84.016846 * 31557600) * 100) / 100;
        case 'neptune':
            return Math.round(time / (164.79132 * 31557600) * 100) / 100;
    }

}