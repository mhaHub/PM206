from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'survival_secret_key'


@app.route('/')
def index():

    session.clear()

    return render_template('index.html')



@app.route('/reglas', methods=['GET', 'POST'])
def reglas():

    if 'fallos_reglas' not in session:
        session['fallos_reglas'] = 0

    mostrar_preguntas = False
    error = None

    if request.method == 'POST':

        accion = request.form.get('accion')

        if accion == 'mostrar':

            mostrar_preguntas = True

        elif accion == 'validar':

            mostrar_preguntas = True

            p1 = request.form.get('p1')
            p2 = request.form.get('p2')
            compromiso = request.form.get('compromiso')

            correctas = 0

            if p1 == '80%':
                correctas += 1

            if p2 == 'reprobar':
                correctas += 1

            if correctas >= 2 and compromiso:

                session['reglas'] = True
                session['fallos_reglas'] = 0

                return redirect(url_for('notas'))

            else:

                session['fallos_reglas'] += 1

                intentos = session['fallos_reglas']

                if intentos == 1:
                    error = 'Advertencia: vuelve a intentarlo o date por reprobado.'

                elif intentos == 2:
                    error = 'Riesgo Académico: estás reprobando "ALERTA".'

                elif intentos == 3:
                    error = '¿Quieres recursar la materia?'

                else:
                    error = 'GAME OVER: enviado a recursamiento.'
                    session['fallos_reglas'] = 0

    return render_template(
        'reglas.html',
        mostrar_preguntas=mostrar_preguntas,
        error=error,
        intentos=session['fallos_reglas']
    )


@app.route('/notas', methods=['GET', 'POST'])
def notas():

    if not session.get('reglas'):
        return redirect(url_for('reglas'))

    if 'fallos_notas' not in session:
        session['fallos_notas'] = 0

    mostrar_preguntas = False
    error = None

    if request.method == 'POST':

        accion = request.form.get('accion')


        if accion == 'mostrar':

            mostrar_preguntas = True


        elif accion == 'validar':

            mostrar_preguntas = True

            p1 = request.form.get('p1')
            p2 = request.form.get('p2')
            compromiso = request.form.get('compromiso')

            correctas = 0

            if p1 == '50%':
                correctas += 1

            if p2 == '20%':
                correctas += 1


            if correctas >= 2 and compromiso:

                session['notas'] = True
                session['fallos_notas'] = 0

                return redirect(url_for('skills'))

            else:

                session['fallos_notas'] += 1

                intentos = session['fallos_notas']

                if intentos == 1:
                    error = 'El Oráculo detecta errores.'

                elif intentos == 2:
                    error = 'Tu promedio comienza a bajar.'

                elif intentos == 3:
                    error = 'Estás cerca de recursar.'

                else:
                    error = 'GAME OVER ACADÉMICO "REPROBADO".'
                    session['fallos_notas'] = 0

    return render_template(
        'notas.html',
        mostrar_preguntas=mostrar_preguntas,
        error=error,
        intentos=session['fallos_notas']
    )



@app.route('/skills', methods=['GET', 'POST'])
def skills():

    if not session.get('notas'):
        return redirect(url_for('notas'))

    if 'fallos_skills' not in session:
        session['fallos_skills'] = 0

    mostrar_preguntas = False
    error = None

    if request.method == 'POST':

        accion = request.form.get('accion')

        if accion == 'mostrar':

            mostrar_preguntas = True

        elif accion == 'validar':

            mostrar_preguntas = True

            p1 = request.form.get('p1')
            p2 = request.form.get('p2')
            compromiso = request.form.get('compromiso')

            correctas = 0

            if p1 == 'apps':
                correctas += 1

            if p2 == 'multiplataforma':
                correctas += 1

            if correctas >= 2 and compromiso:

                session['skills'] = True
                session['fallos_skills'] = 0

                return redirect(url_for('timeline'))

            else:

                session['fallos_skills'] += 1

                intentos = session['fallos_skills']

                if intentos == 1:
                    error = 'Tus skills aún son débiles.'

                elif intentos == 2:
                    error = 'El sistema detecta bajo rendimiento.'

                elif intentos == 3:
                    error = 'Tus habilidades no son suficientes.'

                else:
                    error = 'HAS FALLADO LA MISIÓN.'
                    session['fallos_skills'] = 0

    return render_template(
        'skills.html',
        mostrar_preguntas=mostrar_preguntas,
        error=error,
        intentos=session['fallos_skills']
    )


@app.route('/timeline')
def timeline():

    if not session.get('skills'):
        return redirect(url_for('skills'))

    return render_template('timeline.html')



@app.route('/reiniciar')
def reiniciar():

    session.clear()

    return redirect(url_for('index'))



if __name__ == '__main__':
    app.run(debug=True)