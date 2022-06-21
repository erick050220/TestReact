import express from 'express';
import path from 'path';

class Server {
    constructor () {
        this._api=express();
        this._port =3000;
        this._host ='localhost';
        this.initMiddlewares ()
        this.initRoutes ();
    }
    initMiddlewares () {
        
}}