<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Auth\AuthManager;
use Illuminate\Support\Facades\Validator;
use illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validate->fails()) {
            $respon = [
                'status' => 'error',
                'message' => 'Validator error',
                'errors' => $validate->errors(),
                'data' => null
            ];
            return response()->json($respon, Response::HTTP_NOT_FOUND);
        } else {
            $credentials = request(['email', 'password']);
            $credentials = Arr::add($credentials, 'status', 'aktif');
            if (!Auth::attempt($credentials)) {
                $respon = [
                    'status' => 'error',
                    'message' => 'email atau password salah',
                    'errors' => null,
                    'data' => null
                ];
                return response()->json($respon, Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $user = User::where('email', $request->email)->first();
            if (!Hash::check($request->password, $user->password)) {
                throw new Exception('Error in Login');
            }

            $tokenResult = $user->createToken('token-auth')->plainTextToken;
            $respon = [
                'status' => 'success',
                'user' => $user,
                'message' => 'Login Successfully',
                'errors' => null,
                'access_token' => $tokenResult,
            ];
            return response()->json($respon, Response::HTTP_OK);
        }
    }

    function me(Request $request)
    {
        return $request->user();
    }

    function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        $respon = [
            'status' => 'success',
            'message' => 'Logout Successfully',
            'errors' => null,
            'data' => null
        ];
        return response()->json($respon, 200);
    }

    function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('token-autuh')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json($response, Response::HTTP_OK);
    }
}
