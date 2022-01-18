// Split string by the first occurrence of separator

const sectionString = (s, t) => {
    const i = s.indexOf(t);
    if (i < 0) {
        return [s, ''];
    }
    else {
        return [s.slice(i), s.slice(i + t.length)];
    }
}

const result = sectionString('All you need is JavaScript', 'is');
console.log(result);
