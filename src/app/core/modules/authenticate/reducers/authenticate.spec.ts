// import { reducer } from './index';
// import * as fromFlavor from './flavor';

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Flavor } from '../models';
// import { FlavorActions } from '../actions';
// import { getFlavorListLoading } from './flavor';

// const flavorActions = new FlavorActions()

// describe('Flavor Reducer', () => {
//     const initialState = fromFlavor.initialState;
//     const currentState = {
//         flavors: [
//             {
//                 id: 1,
//                 uid: 'flavor1',
//                 name: 'flavor1',
//             }, {
//                 id: 2,
//                 uid: 'flavor2',
//                 name: 'flavor2',
//             }],
//         loading: false
//     };
//     const currentStateLoading = Object.assign({}, currentState, { loading: true });

//     it('initial state', () => {
//         const action = {} as any;
//         const expected = initialState;
//         const actual = reducer(undefined, action);
//         expect(actual).toEqual(expected);
//     });

//     it('undefined action', () => {
//         const action = {} as any;
//         const expected = currentState;
//         const actual = reducer(currentState, action);
//         expect(actual).toEqual(expected);
//     });

//     it('should load payloads of the action and set loading to false when load successful', () => {
//         const action = flavorActions.loadFlavorsSuccess(
//             [{
//                 id: 3,
//                 uid: 'flavor3',
//                 name: 'flavor3'
//             }]
//         );
//         const expected = action.payload;
//         const actual = reducer(currentStateLoading, action);
//         expect(actual.flavors).toEqual(action.payload);
//         expect(actual.loading).toEqual(false);
//     });

//     it('should add payloads of action to state and set loading to false when add successful', () => {
//         const action = flavorActions.addFlavorSuccess({
//             id: 3,
//             uid: 'flavor3',
//             name: 'flavor3'
//         });
//         const expected = [...currentState.flavors, action.payload]
//         const actual = reducer(currentStateLoading, action);
//         expect(actual.flavors).toEqual(expected);
//         expect(actual.loading).toEqual(false);
//     });

//     it('should update current flavors and set loading to false when update successful', () => {
//         const action = flavorActions.updateFlavorSuccess({
//             id: 2,
//             uid: 'flavor2',
//             name: 'flavor2ToUpdate'
//         });
//         const expected = [{
//             id: 1,
//             uid: 'flavor1',
//             name: 'flavor1'
//         }, {
//             id: 2,
//             uid: 'flavor2',
//             name: 'flavor2ToUpdate'
//         }];
//         const actual = reducer(currentStateLoading, action);
//         expect(actual.flavors).toEqual(expected);
//         expect(actual.loading).toEqual(false);

//     });

//     it('should return current flavors and set loading to false when not found on updating', () => {
//         const action = flavorActions.updateFlavorSuccess({
//             id: 3,
//             uid: 'flavor3',
//             name: 'flavor3ToUpdate',
//         });
//         const expected = [{
//             id: 1,
//             uid: 'flavor1',
//             name: 'flavor1',
//         }, {
//             id: 2,
//             uid: 'flavor2',
//             name: 'flavor2',
//         }]
//         const actual = reducer(currentStateLoading, action);
//         expect(actual.flavors).toEqual(expected);
//         expect(actual.loading).toEqual(false);
//     });

//     it('should remove flavor and set loading to false when delete successful', () => {
//         const action = flavorActions.deleteFlavorSuccess({
//             id: 2,
//             uid: 'flavor2',
//             name: 'flavor2',
//         });
//         const expected = [{
//             id: 1,
//             uid: 'flavor1',
//             name: 'flavor1',
//         }];
//         const actual = reducer(currentStateLoading, action);
//         expect(actual.flavors).toEqual(expected);
//         expect(actual.loading).toEqual(false);
//     });

//     it('loading should be true when load flavors', () => {
//         const action = flavorActions.loadFlavors();
//         const actual = reducer(currentState, action);
//         expect(actual.loading).toEqual(true);
//     });

//     it('loading should be true when update a flavor', () => {
//         const action = flavorActions.updateFlavor({
//             id: 2,
//             uid: 'flavor2',
//             name: 'flavor2',
//         });
//         const actual = reducer(currentState, action);
//         expect(actual.loading).toEqual(true);
//     });

//     it('loading should be true when add a flavor', () => {
//         const action = flavorActions.addFlavor({
//             id: 3,
//             uid: 'flavor3',
//             name: 'flavor3',
//         });
//         const actual = reducer(currentState, action);
//         expect(actual.loading).toEqual(true);
//     });

//     it('loading should be true when delete a flavor', () => {
//         const action = flavorActions.deleteFlavor({
//             id: 2,
//             uid: 'flavor2',
//             name: 'flavor2',
//         });
//         const actual = reducer(currentState, action);
//         expect(actual.loading).toEqual(true);
//     });

//     it('should return current state when fail', () => {
//         const action = flavorActions.fail();
//         const actual = reducer(currentState, action);
//         expect(actual).toEqual(currentState);
//     });

//     it('getFlavorList', () => {
//         const expected = currentState.flavors;
//         const actual = fromFlavor.getFlavorList(currentState);
//         expect(actual).toEqual(expected);
//     });

//     it('getFlavorListLoading', () => {
//         const expected = currentState.loading;
//         const actual = fromFlavor.getFlavorListLoading(currentState);
//         expect(actual).toEqual(expected);
//     });

// })