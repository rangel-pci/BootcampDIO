import { Request } from "express";
import { UsersController } from "../controllers/usersController"
import { makeMockResponse } from "../mocks/mockResponse";

describe('Testing users controller', () => {
    const usersController = new UsersController();
    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();
    it('Should list users', () => {
        usersController.list(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(1);
    })

    it('Should create a new user', () => {
        mockRequest.body = { name: 'new user' };

        usersController.create(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: `User new user created successfully.` });
    })

    it('Should not create a new user if username are blank', () => {
        mockRequest.body = { name: '' };

        usersController.create(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({ message: 'Undefined username' });
    })
})