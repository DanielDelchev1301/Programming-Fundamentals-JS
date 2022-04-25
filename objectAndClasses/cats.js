function cats(arr) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${name}, age ${age} says Meow`);
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].split(' ');
        let [name, age] = [curr[0], curr[1]];
        cats.push(new Cat(name, age));
    }
    for (let cat of cats) {
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);