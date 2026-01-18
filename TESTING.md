# 🧪 API TESTING GUIDE

## Flow yang Benar

### 1. REGISTER (Tidak butuh token)

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "username": "testuser",
    "password": "password123"
  }'
```

Response:

```json
{
  "status": 201,
  "message": "succes created password",
  "isVerif": false
}
```

---

### 2. LOGIN (Tidak butuh token) → Dapat JWT Token

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

Response:

```json
{
  "status": 200,
  "message": "succes login",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Save token ini untuk request berikutnya!**

---

### 3. GET USER PROFILE (Butuh JWT Token)

```bash
curl -X GET http://localhost:3000/users/user \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

Response:

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "userId": "uuid-here",
    "email": "user@example.com",
    "username": "testuser"
  }
}
```

---

### 4. UPDATE USER (Butuh JWT Token)

```bash
curl -X PATCH http://localhost:3000/users/user/edit/YOUR_USER_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "email": "newemail@example.com",
    "username": "newusername",
    "password": "newpassword123"
  }'
```

Response:

```json
{
  "status": 200,
  "message": "berhasil update user"
}
```

---

### 5. DELETE USER (Butuh JWT Token)

```bash
curl -X DELETE http://localhost:3000/users/delete/YOUR_USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

Response:

```json
{
  "status": 200,
  "message": "succes delete users"
}
```

---

## ⚠️ Important Notes

1. **Token Header Format**: Harus `Authorization: Bearer <token>`

   - Bukan `Barer` (typo sudah diperbaiki)
   - Harus ada spasi antara `Bearer` dan token

2. **Token Expiration**: Belum ada expiry time di jwt.sign(), pertimbangkan tambahkan:

   ```javascript
   jwt.sign(payload, secretKey, {
     algorithm: "HS256",
     expiresIn: "24h", // Tambahkan ini
   });
   ```

3. **Semua endpoint protected kecuali**:

   - `POST /users/register`
   - `POST /users/login`

4. **Response Format Sudah Standardized**:
   - `status`: HTTP status code
   - `message`: Pesan yang informatif
   - `data`: Data yang dikembalikan (jika ada)

---

## 🔧 Troubleshooting

### Error: "token tidak valid, anda dilarang masuk"

- Cek format header: harus `Authorization: Bearer <token>`
- Cek token belum expired

### Error: "token expired atau invalid"

- Token sudah expired atau invalid
- Login ulang untuk dapat token baru

### Error: "undefined"

- Check kalau JWT_SECRET di .env sudah di-set dengan benar
- Restart server setelah update .env

---

## 📝 Improvements Done

✅ Fixed `checkTokenHeader.js` - Now properly validates JWT token
✅ Fixed login controller - Returns JWT token in response
✅ Fixed login service - Generates JWT token
✅ Fixed `generateSession.utils.js` - Uses JWT_SECRET from .env
✅ Updated `.env` - Changed `secretKey` to `JWT_SECRET`
✅ Fixed `getUser.controller.js` - Extracts userId from token (req.user.userId)
