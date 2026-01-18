import { expect, jest } from "@jest/globals";

// 1. Mock service (pastikan path benar)
await jest.unstable_mockModule("../../src/services/login.service.js", () => ({
  default: jest.fn(),
}));

// 2. Import dinamis (Ambil properti .default)
// Perhatikan: kita simpan ke variabel bernama loginController
const { default: loginController } = await import(
  "../../src/controllers/login.controller.js"
);
const { default: loginService } = await import(
  "../../src/services/login.service.js"
);

describe("loginController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  //   it("password kurang dari 8", async () => {
  //     const req = {
  //       body: {
  //         email: "asdsdsd@gmail.com",
  //         password: "12345",
  //       },
  //     };

  //     const res = {
  //       status: jest.fn(),
  //       message: jest.fn(),
  //     };

  //     // expect(res.status).toHaveBeenCalledWith(404);
  //     expect(res.message).toHaveBeenCalledWith({
  //       status: false,
  //       message: "password min 8 length",
  //     });
  //   });

  it("login sukses → set cookie & return 200", async () => {
    const req = {
      body: {
        email: "test@mail.com",
        password: "123456",
      },
    };

    const res = {
      cookie: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Setup mock return value
    loginService.mockResolvedValue({
      status: true,
      session: "fake-token",
    });

    // Panggil controller
    await loginController(req, res);

    expect(loginService).toHaveBeenCalledWith({
      email: "test@mail.com",
      password: "123456",
    });

    expect(res.cookie).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      message: "succes login",
    });
  });

  it("login gagal → return error", async () => {
    const req = {
      body: {
        email: "test@mail.com",
        password: "salah",
      },
    };

    const res = {
      cookie: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    loginService.mockResolvedValue({
      status: false,
      message: "invalid password",
    });

    await loginController(req, res);

    expect(res.status).toHaveBeenCalledWith(401); // Sesuai dengan kode controller Anda (res.status(401))
    expect(res.json).toHaveBeenCalledWith({
      status: 404, // Sesuai dengan isi JSON di controller Anda
      message: "invalid password",
    });
  });
});
