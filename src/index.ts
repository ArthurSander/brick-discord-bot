import 'reflect-metadata';
import 'dotenv/config';
import { DefaultContainerFactory } from './Infrastructure/IoC/Factories/DefaultContainerFactory';
import { Core } from './Infrastructure/Bootstrap/core';

var containerFactory = new DefaultContainerFactory();
var core = new Core(containerFactory.create());
core.start();