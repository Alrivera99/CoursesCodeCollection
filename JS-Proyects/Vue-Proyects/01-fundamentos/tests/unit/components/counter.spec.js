import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  // test('debe de hacer match con el snapshot', () =>{

  //     const wrapper = shallowMount( Counter )
  //     expect( wrapper.html() ).toMatchSnapshot()
  // })

  test("h2 debe de tener el valor por defecto", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2Value = wrapper.find("h2").text();
    expect(h2Value).toBe("Counter");
  });

  test('El valor por defecto deber de ser 100 en el p', () =>{
    //Wrapper
    const wrapper = shallowMount(Counter)
    //pTags
    const pTags = wrapper.findAll('p')
    // expect segundo p === 100
    expect( pTags[1].text()).toBe('100')
  })

  test('debe de incrementar en 1 el valor del contador', async() => {

    const wrapper = shallowMount( Counter )

    const increaseBtn = wrapper.find('button')

    await increaseBtn.trigger('click')

    const value = wrapper.find('[data-testid="counter"]')
  })
});