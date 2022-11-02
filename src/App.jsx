import React from "react";
import "./style.css";



export default function App() {
  return (
    <div id="Page">
      <div id ="Title">
          <h1>Encuesta de percepción </h1>
      </div>
      <div id="Texto">
        <form id="formulario">
        <h3>Bienvenido</h3>
        
        <p>Seleccione las materias que tiene matriculadas</p>
        <input type="radio" required name ="materias" id="m2" value="Fundamentos"/> <label for="m2">Fundamentos de programación</label> <br></br>
        <input type="radio" required name ="materias" id="m1" value="POO1"/> <label for="m1">POO1</label>  <br></br>
        <input type="radio" required name ="materias" id="m3" value="Estructuras"/> <label for="m3">Estructuras de datos</label> <br></br>
        <input type="radio" required name ="materias" id="m4" value="Bases de Datos"/> <label for="m4">Bases de datos</label> <br />
    
        <p>Seleccione su semestre actual<abbr title="Este campo es obligatorio" aria-label="required">*</abbr></p>
    
        <input type="radio" required name="NunSem" id="s1" value={1}/><label for="s1">Semestre 1</label>
        <input type="radio" required name="NunSem" id="s2" value={2}/><label for="s2">Semestre 2</label>
        <input type="radio" required name="NunSem" id="s3" value={3}/><label for="s3">Semestre 3</label>
        <input type="radio" required name="NunSem" id="s4" value={4}/><label for="s4">Semestre 4</label>
        <input type="radio" required name="NunSem" id="s5" value={5}/><label for="s5">Semestre 5</label>
        <input type="radio" required name="NunSem" id="s6" value={6}/><label for="s6">Semestre 6</label>
    
        <p>De acuerdo a su experiencia en la universidad 
            califique los siguientes conceptos,<br /> siendo 1 
            muy insatisfecho y 5 totalmente satisfecho</p>

        <p>¿Qué tan satisfecho se siente con su aprendizaje?</p>
    
        <input type="radio" required name="nivAprendizaje" id="n_a1" value={1}/><label for="n_a1"> 1</label>
        <input type="radio" required name="nivAprendizaje" id="n_a2" value={2}/><label for="n_a2"> 2</label>
        <input type="radio" required name="nivAprendizaje" id="n_a3" value={3}/><label for="n_a3"> 3</label>
        <input type="radio" required name="nivAprendizaje" id="n_a4" value={4}/><label for="n_a4"> 4</label> 
        <input type="radio" required name="nivAprendizaje" id="n_a5" value={5}/><label for="n_a5"> 5</label>
    
        <p>¿Qué tan eficiente considera el uso de inglés en sus cursos?</p>
    
        <input type="radio" required name="nivInglés" id="n_i1" value={1}/> <label>1</label>  
        <input type="radio" required name="nivInglés" id="n_i2" value={2}/> <label>2</label> 
        <input type="radio" required name="nivInglés" id="n_i3" value={3}/> <label>3</label> 
        <input type="radio" required name="nivInglés" id="n_i4" value={4}/> <label>4</label> 
        <input type="radio" required name="nivInglés" id="n_i5" value={5}/> <label>5</label> 
    
        <p>¿Qué tan a gusto se siente con los espacios locativos de la Universidad?</p>
    
        <input type="radio" required name="nivEspacios" id="n_e1" value={1}/> <label>1</label>  
        <input type="radio" required name="nivEspacios" id="n_e2" value={2}/> <label>2</label> 
        <input type="radio" required name="nivEspacios" id="n_e3" value={3}/> <label>3</label> 
        <input type="radio" required name="nivEspacios" id="n_e4" value={4}/> <label>4</label> 
        <input type="radio" required name="nivEspacios" id="n_e5" value={5}/> <label>5</label> 
    
        <p>¿Qué tan a gusto se siente con los profesores de sus cursos?</p>
    
        <input type="radio" required name="nivProfes" id="n_p1" value={1}/> <label>1</label>  
        <input type="radio" required name="nivProfes" id="n_p2" value={2}/> <label>2</label> 
        <input type="radio" required name="nivProfes" id="n_p3" value={3}/> <label>3</label> 
        <input type="radio" required name="nivProfes" id="n_p4" value={4}/> <label>4</label> 
        <input type="radio" required name="nivProfes" id="n_p5" value={5}/> <label>5</label> 
        <br/> <br/> 


        <button >Enviar</button>
        

        </form>
      </div>
    </div>


  );
}
