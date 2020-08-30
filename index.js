const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-metrics'), { endpoint: '/__metrics' })

fastify.register(require('fastify-cors'), {
  origin: [
    /\.wvffle\.net$/
  ]
})

fastify.get('/', async (request, reply) => {
  reply.type('html')
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>wvffle | :wq</title>
        <meta charset="utf-8">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <style>
          body,a{font-family:'Fira Mono'}
          body,html{height:100%;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-moz-box-orient:vertical;-o-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}
          h1{color:#fbb21b;text-shadow:3px 3px 0 #f79329;font-size:3em;margin:0 0 88px}.waff{-webkit-animation:float 3s infinite;-moz-animation:float 3s infinite;-o-animation:float 3s infinite;-ms-animation:float 3s infinite;animation:float 3s infinite;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;width:285px;height:171px;-webkit-box-lines:multiple;-moz-box-lines:multiple;-o-box-lines:multiple;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;background:#fbb21b;position:relative;border-radius:7px;padding:7px 0 0 7px;-webkit-transform:rotateZ(-45deg);-moz-transform:rotateZ(-45deg);-o-transform:rotateZ(-45deg);-ms-transform:rotateZ(-45deg);transform:rotateZ(-45deg);-webkit-box-shadow:-16px 16px 0 #f79329;box-shadow:-16px 16px 0 #f79329}.waff::after,.waff::before{content:'';position:absolute;background:#f79329}.waff::after{height:14px;width:289px;bottom:-13px;left:-7px;-webkit-transform:skewX(-45deg);-moz-transform:skewX(-45deg);-o-transform:skewX(-45deg);-ms-transform:skewX(-45deg);transform:skewX(-45deg)}.waff::before{height:175px;width:14px;bottom:-7px;left:-13px;-webkit-transform:skewY(-45deg);-moz-transform:skewY(-45deg);-o-transform:skewY(-45deg);-ms-transform:skewY(-45deg);transform:skewY(-45deg)}.waff .square{background:#fcc21b;height:50px;width:50px;-webkit-box-shadow:inset -7px 7px 0 #f79329;box-shadow:inset -7px 7px 0 #f79329;border-radius:7px;margin:0 7px 7px 0}.shadow{-webkit-animation:sha 3s infinite;-moz-animation:sha 3s infinite;-o-animation:sha 3s infinite;-ms-animation:sha 3s infinite;animation:sha 3s infinite;opacity:.2;height:30px;width:330px;background:#521;position:relative;border-radius:50%;-webkit-transform:translateY(130px);-moz-transform:translateY(130px);-o-transform:translateY(130px);-ms-transform:translateY(130px);transform:translateY(130px)}.fix-preview{width:330px;height:1px}@-moz-keyframes float{0%,100%{-webkit-transform:translateY(0) rotateZ(-45deg);-moz-transform:translateY(0) rotateZ(-45deg);-o-transform:translateY(0) rotateZ(-45deg);-ms-transform:translateY(0) rotateZ(-45deg);transform:translateY(0) rotateZ(-45deg)}65%{-webkit-transform:translateY(15px) rotateZ(-45deg);-moz-transform:translateY(15px) rotateZ(-45deg);-o-transform:translateY(15px) rotateZ(-45deg);-ms-transform:translateY(15px) rotateZ(-45deg);transform:translateY(15px) rotateZ(-45deg)}}@-webkit-keyframes float{0%,100%{-webkit-transform:translateY(0) rotateZ(-45deg);-moz-transform:translateY(0) rotateZ(-45deg);-o-transform:translateY(0) rotateZ(-45deg);-ms-transform:translateY(0) rotateZ(-45deg);transform:translateY(0) rotateZ(-45deg)}65%{-webkit-transform:translateY(15px) rotateZ(-45deg);-moz-transform:translateY(15px) rotateZ(-45deg);-o-transform:translateY(15px) rotateZ(-45deg);-ms-transform:translateY(15px) rotateZ(-45deg);transform:translateY(15px) rotateZ(-45deg)}}@-o-keyframes float{0%,100%{-webkit-transform:translateY(0) rotateZ(-45deg);-moz-transform:translateY(0) rotateZ(-45deg);-o-transform:translateY(0) rotateZ(-45deg);-ms-transform:translateY(0) rotateZ(-45deg);transform:translateY(0) rotateZ(-45deg)}65%{-webkit-transform:translateY(15px) rotateZ(-45deg);-moz-transform:translateY(15px) rotateZ(-45deg);-o-transform:translateY(15px) rotateZ(-45deg);-ms-transform:translateY(15px) rotateZ(-45deg);transform:translateY(15px) rotateZ(-45deg)}}@keyframes float{0%,100%{-webkit-transform:translateY(0) rotateZ(-45deg);-moz-transform:translateY(0) rotateZ(-45deg);-o-transform:translateY(0) rotateZ(-45deg);-ms-transform:translateY(0) rotateZ(-45deg);transform:translateY(0) rotateZ(-45deg)}65%{-webkit-transform:translateY(15px) rotateZ(-45deg);-moz-transform:translateY(15px) rotateZ(-45deg);-o-transform:translateY(15px) rotateZ(-45deg);-ms-transform:translateY(15px) rotateZ(-45deg);transform:translateY(15px) rotateZ(-45deg)}}@-moz-keyframes sha{0%{width:330px;opacity:.1666}65%{width:300px;opacity:.2}100%{width:330px;opacity:.1666}}@-webkit-keyframes sha{0%{width:330px;opacity:.1666}65%{width:300px;opacity:.2}100%{width:330px;opacity:.1666}}@-o-keyframes sha{0%{width:330px;opacity:.1666}65%{width:300px;opacity:.2}100%{width:330px;opacity:.1666}}@keyframes sha{0%{width:330px;opacity:.1666}65%{width:300px;opacity:.2}100%{width:330px;opacity:.1666}}.contact{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin-bottom:17px;font-family:monospace;font-size:1.2rem;font-weight:900;color:#fbb21b}
          footer{max-width:100%;position:absolute;bottom:0;left:0;width:100%;overflow:hidden}canvas{display:block}
          .logo{position:absolute;top:3rem;left:3rem;width:256px}
          .links-left{position:absolute;top:50%;transform:translate(-50%,-50%);left:25%}
          .links-right{position:absolute;top:50%;transform:translate(-50%,-50%);left:75%}
          ion-icon{padding:1rem;font-size:3rem}
          a{color:#fcc21b;text-decoration:none}
          a:hover{color:#f79329}
          .links-right>div{padding:.5rem}
        </style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typeface-fira-mono@0.0.72/index.min.css">
        <script async defer data-domain="wvffle.net" src="https://plausible.motyka.pro/js/plausible.js"></script>
        <script async defer src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
      </head>

      <body>
        <img class="logo" src="https://cdn.jsdelivr.net/gh/wvffle/wvffle-logo/logo-horizontal.svg">
        <div class="waff">${'<div class="square"></div>'.repeat(15)}</div>
        <div class="shadow"></div>
        <div class="links-left">
          <a target="_blank" rel="noopener" href="https://github.com/wvffle">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a target="_blank" rel="noopener" href="https://codepen.io/wvffle/">
            <ion-icon name="logo-codepen"></ion-icon>
          </a>
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/kasper-seweryn-553241167/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a target="_blank" rel="noopener" href="https://stackoverflow.com/users/5565538/kasper-seweryn">
            <ion-icon name="logo-stackoverflow"></ion-icon>
          </a>
        </div>
        <div class="links-right">
          <div><a href="mailto:contact@wvffle.net">contact@wvffle.net</a></div>
          <div><a href="https://matrix.to/#/@waff:wvffle.net">@waff:wvffle.net</a></div>
        </div>
        <div class="fix-preview"></div>
        <footer>
          <canvas></canvas>
        </footer>
        <script>
          const NODES = 6
          const WAVE_HEIGHT = 160
          const waves = []
          const colors = ['#fcc21b', '#f79329', '#fbb21b']

          const cvs = document.querySelector('canvas')
          const ctx = cvs.getContext('2d')

          cvs.width = window.innerWidth > 1920 ? window.innerWidth : 1920
          cvs.height = WAVE_HEIGHT

          class Wave {
            constructor (color) {
              this.color = color
              this.nodes = []

              for (var i = 0; i <= NODES + 2; ++i) {
                this.nodes.push([
                  (i-1) * cvs.width / NODES,
                  0,
                  Math.random() * 200,
                  .3
                ])
              }
            }

            update () {
              for (const node of this.nodes) {
                node[1] = WAVE_HEIGHT / 2 * Math.sin(node[2] / 20) + cvs.height / 2
                node[2] += node[3]
              }
            }

            _diff (a, b) {
              return (b - a)/2 + a;
            }

            draw () {
              ctx.fillStyle = this.color

              ctx.beginPath()
              ctx.moveTo(0, cvs.height)
              ctx.lineTo(this.nodes[0][0], this.nodes[0][1])

              for (let i = 0; i < this.nodes.length; ++i) {
                if (this.nodes[i + 1]) {
                  ctx.quadraticCurveTo(
                    this.nodes[i][0],
                    this.nodes[i][1],
                    this._diff(this.nodes[i][0], this.nodes[i+1][0]),
                    this._diff(this.nodes[i][1], this.nodes[i+1][1])
                  )

                  continue
                }

                ctx.lineTo(this.nodes[i][0], this.nodes[i][1])
                ctx.lineTo(cvs.width, cvs.height)
              }

              ctx.closePath()
              ctx.fill()
            }
          }

          for (const color of colors) {
            waves.push(new Wave(color));
          }

          function update() {
            ctx.fillStyle = '#fff'
            ctx.fillRect(0, 0, cvs.width, cvs.height)

            for (const wave of waves) {
              wave.update()
              wave.draw()
            }

            requestAnimationFrame(update);
          }

          update()
        </script>
      </body>
    </html>`
})

const start = async () => {
  try {
    await fastify.listen(8666, '0.0.0.0')
    console.log(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
