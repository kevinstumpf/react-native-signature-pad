var content = script =>
  `<html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    *
    {margin:0;padding:0;}

    canvas
    {
      position:absolute;transform:translateZ(0);
      /* In case the React Transformation is not performant, we'll fall back to this one

      transform-origin:left top;
      -ms-transform-origin:left top;
      -webkit-transform-origin:left top;
      transform:rotate(-90deg) translate(-100%, 0px);
      -ms-transform:rotate(-90deg)  translate(-100%, 0px);
      -webkit-transform:rotate(-90deg)  translate(-100%, 0px);*/
    }

    </style>
    <body>
      <canvas style="margin-left: 0; margin-top: 0;"></canvas>
      <script>
        ${script}
      </script>
    </body>
  </html>`;

export default content;
