<?php

use Symfony\Component\HttpFoundation\Request;

//use Symfony\Component\Debug\Debug;

// If you don't want to setup permissions the proper way, just uncomment the following PHP line
// read http://symfony.com/doc/current/setup.html#checking-symfony-application-configuration-and-setup
// for more information
umask(0000);
date_default_timezone_set('Asia/Tbilisi');
/** @var \Composer\Autoload\ClassLoader $loader */
$loader = require __DIR__ . '/../app/autoload.php';
//Debug::enable();

$kernel = new AppKernel('dev', true);
<<<<<<< HEAD
$kernel->loadClassCache();

=======

//$kernel->loadClassCache();
>>>>>>> a043fe031f2e12c393e484fb96954a1f9821c896
$request = Request::createFromGlobals();

$response = $kernel->handle($request);

$response->send();
$kernel->terminate($request, $response);
