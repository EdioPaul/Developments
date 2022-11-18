const total = 10000

const secondsToTime = (total) => {
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = Math.round(total % 60)

    const s = `0${seconds}`.slice(-2);
    const m = `0${minutes}`.slice(-2);
    const h = hours > 10 ? hours : `0${hours}`;

    return [h, m, s].join(':');
};

secondsToTime(total)