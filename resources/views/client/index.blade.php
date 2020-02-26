<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="theme-color" content="#2196f3">
        <title>My App</title>
        <link href="{{ asset('client/css/fw7/framework7.bundle.min.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('client/js/app.js') }}"></script>
    </body>
</html>