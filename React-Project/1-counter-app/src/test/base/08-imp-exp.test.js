import '@testing-library/jest-dom'

import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {
    
    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)
    })
    

    // test('Debe de retornar un undefined si Heroe no existe', () => {
    //     const id = 1;
    //     const heroe = getHeroeById(id)

    //     expect(heroe).toBe(undefined);
    // })     
    test('debe retornar 2', () => {
        const owner = 'Marvel'

        const heroes = getHeroesByOwner( owner )

        expect( heroes.length ).toBe( 2 )
    }) 
})
