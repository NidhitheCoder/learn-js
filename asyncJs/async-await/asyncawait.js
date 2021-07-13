function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('he is');
      }, 1000);
    });
  }
  function scaryClown1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('perfectly');
      }, 3000);
    });
  }
  function scaryClown2() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('talented');
      }, 5000);
    });
  }
    
    async function test() {
        console.log('this is test')
    const o=await scaryClown()
    const o1=await scaryClown1()
    const o2=await scaryClown2()
    console.log(o+' '+o1+' '+o2)
    }
    test();