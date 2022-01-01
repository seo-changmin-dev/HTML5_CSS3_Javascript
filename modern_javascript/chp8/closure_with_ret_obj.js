function Person(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName: function() {
      return _name;
    },

    getAge: function() {
      return _age;
    }
  }
}

let guy = Person("Mr.Seo", 123);
console.log(guy.getName()); // Mr.Seo
console.log(guy.getAge()); // 123