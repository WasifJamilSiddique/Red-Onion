

import React, { useState, createContext, useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Route, Redirect } from 'react-router-dom'

firebase.initializeApp(firebaseConfig);

