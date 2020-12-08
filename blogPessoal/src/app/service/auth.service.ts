import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:9000/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario) {
    return this.http.post('http://localhost:9000/usuarios/cadastrar', usuario)
  }
}
