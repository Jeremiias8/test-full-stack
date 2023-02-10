<?php

    if (isset($_GET['estado'])) {
        $enunciado = $_GET['estado'];
        $estado = $_GET['texto'];
    }

    echo '<table border="1">
        <h2 class="underline">Listado de preguntas</h2>

        <tr>
            <td>ID . 1 . $enunciado</td>
            <td>ID . 2 . Enunciado . $estado</td>
            <td>Accion <button style="border: 1px solid black;padding:1rem" id="delete">🗑️  Borrar</button></td>
        </tr>
    </table>';
?>

    <?php
        echo '<h2 class="underline">Listado de preguntas</h2>';

        echo '<tr >';
        
        echo '<td >ID' . '1' . '</td>';
        echo '<td >Enunciado' . $enunciado['estado'] . '</td>';
        echo '<td >Estado' . $estado['texto'] . '</td>';

        echo '<td>Acción
            <button style="border: 1px solid black;padding: 1rem" id="delete"></button>
        </td>';

        echo '</tr>';
    ?>