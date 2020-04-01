var content = script =>
  `<html>
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

    html,body {
      width: 100%;
      height: 100%;
      margin: 0;
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
