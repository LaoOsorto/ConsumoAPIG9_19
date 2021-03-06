var UrlGetSocios   = 'http://34.68.196.220:90/G9_19/SociosNegocio/controller/socios.php?op=GetSocios';
var UrlPostSocio   = 'http://34.68.196.220:90/G9_19/SociosNegocio/controller/socios.php?op=InsertSocio';
var UrlPutSocio    = 'http://34.68.196.220:90/G9_19/SociosNegocio/controller/socios.php?op=UpdateSocio';
var UrlDeleteSocio = 'http://34.68.196.220:90/G9_19/SociosNegocio/controller/socios.php?op=DeletetSocio';
var UrlPostUnSocio = 'http://34.68.196.220:90/G9_19/SociosNegocio/controller/socios.php?op=GetUnSocio';

$(document).ready(function(){
    CargarSocios();
});

function CargarSocios(){
    $.ajax({
        url: UrlGetSocios,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var Valores = '';

            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>' +
                '<td>'+ MiItems[i].ID            + '</td>'+
                '<td>'+ MiItems[i].NOMBRE        + '</td>'+
                '<td>'+ MiItems[i].RAZON_SOCIAL  + '</td>'+
                '<td>'+ MiItems[i].DIRECCION     + '</td>'+
                '<td>'+ MiItems[i].TIPO_SOCIO    + '</td>'+
                '<td>'+ MiItems[i].CONTACTO      + '</td>'+
                '<td>'+ MiItems[i].EMAIL         + '</td>'+
                '<td>'+ MiItems[i].FECHA_CREADO  + '</td>'+
                '<td>'+ MiItems[i].ESTADO        + '</td>'+
                '<td>'+ MiItems[i].TELEFONO      + '</td>'+
                '<td>'+
                '<button class="btn btn-warning" onclick="CargarSocio('+ MiItems[i].ID +')">Editar</button>' +
                '<button class="btn btn-outline-danger" onclick="EliminarSocio('+ MiItems[i].ID +')">Eliminar</button>'+
                '</td>' +
                '</tr>';
            $('.socios').html(Valores);
            }
        }
    })
}

function AgregarSocio(){
    var datossocio ={
        nombre: $('#nombre').val(),
        razon_social: $('#razonsocial').val(),
        direccion: $('#direccion').val(),
        tipo_socio: $('#tiposocio').val(),
        contacto: $('#contacto').val(),
        email: $('#email').val(),
        fecha_creado: $('#fechacreado').val(),
        estado: $('#estado').val(),
        telefono: $('#telefono').val() 
    }

    var datossociojson = JSON.stringify(datossocio);

    $.ajax({
        url: UrlPostSocio,
        type: 'POST',
        data: datossociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Socio Agregado")
}

function CargarSocio(idsocio){
    var datossocio = {
        id: idsocio
    }
    var datossociojson = JSON.stringify(datossocio);

    $.ajax({
        url: UrlPostUnSocio,
        type: 'POST',
        data: datossociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            var MiItems = response;
            $('#nombre').val(MiItems[0].NOMBRE);
            $('#razonsocial').val(MiItems[0].RAZON_SOCIAL);
            $('#direccion').val(MiItems[0].DIRECCION);
            $('#tiposocio').val(MiItems[0].TIPO_SOCIO);
            $('#contacto').val(MiItems[0].CONTACTO);
            $('#email').val(MiItems[0].EMAIL);
            $('#fechacreado').val(MiItems[0].FECHA_CREADO);
            $('#estado').val(MiItems[0].ESTADO);
            $('#telefono').val(MiItems[0].TELEFONO);
            var btnactualizar = '<input type="submit" id="btn_actualizar" onclick="ActualizarSocio(' + MiItems[0].ID +')"'+
            'value="Actualizar Socio" class="btn btn-outline-primary"></input>';
            $('.button').html(btnactualizar);
        }
    })
}

function ActualizarSocio(idsocio){
    var datossocio ={
        id: idsocio,
        nombre: $('#nombre').val(),
        RAZON_SOCIAL: $('#razonsocial').val(),
        DIRECCION: $('#direccion').val(),
        TIPO_SOCIO: $('#tiposocio').val(),
        CONTACTO: $('#contacto').val(),
        EMAIL: $('#email').val(),
        FECHA_CREADO: $('#fechacreado').val(),
        ESTADO: $('#estado').val(),
        TELEFONO: $('#telefono').val() 
    }

    var datossociojson = JSON.stringify(datossocio);

    $.ajax({
        url: UrlPutSocio,
        type: 'PUT',
        data: datossociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Socio Actualizado")
}

function EliminarSocio(idsocio){
    var datossocio = {
        id: idsocio
    };

    var datossociojson = JSON.stringify(datossocio);

    $.ajax({
        url: UrlDeleteSocio,
        type: 'DELETE',
        data: datossociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Socio Elininado")
}