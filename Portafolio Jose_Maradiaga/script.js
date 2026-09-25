
        const btnTema = document.getElementById('btn-tema');
        const iconoTema = document.getElementById('icono-tema');
        const raiz = document.documentElement;

        function aplicarTema(oscuro) {
            raiz.classList.toggle('dark', oscuro);
            iconoTema.className = oscuro ? 'fas fa-sun' : 'fas fa-moon';
        }

        aplicarTema(localStorage.getItem('tema') === 'oscuro');

        btnTema.addEventListener('click', () => {
            const oscuro = !raiz.classList.contains('dark');
            aplicarTema(oscuro);
            localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
        });

        
        const btnMenu = document.getElementById('btn-menu');
        const menuMovil = document.getElementById('menu-movil');

        btnMenu.addEventListener('click', () => menuMovil.classList.toggle('hidden'));

        menuMovil.querySelectorAll('a').forEach(enlace => {
            enlace.addEventListener('click', () => menuMovil.classList.add('hidden'));
        });

        
        const textoTyping = document.getElementById('texto-typing');
        const frases = ['Desarrollador web Full-Stack', 'Estudiante de Ingeniería', 'Apasionado por la tecnología'];
        let fraseActual = 0;
        let letras = 0;
        let borrando = false;

        function escribir() {
            const frase = frases[fraseActual];
            letras += borrando ? -1 : 1;
            textoTyping.textContent = frase.slice(0, letras);

            let espera = borrando ? 50 : 100;

            if (!borrando && letras === frase.length) {
                borrando = true;
                espera = 2000;
            } else if (borrando && letras === 0) {
                borrando = false;
                fraseActual = (fraseActual + 1) % frases.length;
                espera = 500;
            }

            setTimeout(escribir, espera);
        }
        escribir();

        
        const botonesFiltro = document.querySelectorAll('.filtro');
        const proyectos = document.querySelectorAll('.proyecto');

        botonesFiltro.forEach(boton => {
            boton.addEventListener('click', () => {
                botonesFiltro.forEach(b => b.classList.remove('activo'));
                boton.classList.add('activo');

                const filtro = boton.dataset.filtro;

                proyectos.forEach(p => {
                    const mostrar = filtro === 'todos' || p.dataset.categoria === filtro;
                    p.style.display = mostrar ? 'flex' : 'none';
                });
            });
        });
