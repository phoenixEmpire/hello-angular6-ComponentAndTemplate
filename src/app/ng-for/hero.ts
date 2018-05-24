export class Hero {
    static nextId = 0;

    static heroes: Hero[] = [
        new Hero(
            null,
            'Hercules',
            'happly',
            new Date(1970, 1, 25),
            'http://www.baidu.com/hero/123456'
        ),
        new Hero(1, 'Mr. Nice', 'happy'),
        new Hero(2, 'Narco', 'sad'),
        new Hero(3, 'Windstorm', 'confused'),
        new Hero(4, 'Magneta')
    ];

    constructor(
        public id?: number,
        public name?: string,
        public emotion?: string,
        public birthday?: Date,
        public url?: string,
        public rage = 100
    ) {
        this.id = id ? id : Hero.nextId++;
    }

    clone(): Hero { // 返回新对象，并深拷贝属性
        return Object.assign(new Hero(), this);
    }
}
