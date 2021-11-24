var urlGetFacturas = 'http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=GetFacturasTodas';
var urlGetFacturasFinalizadas = "http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=GetFacturas";
var urlGetFacturasAnuladas = "http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=GetFacturasAnuladas";
var urlGetFactura = "http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=GetUno";
var urlPostFactura = 'http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=InsertFactura';
var urlPutFacturaDetalle = 'http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=UpdateDetalleFactura';
var urlPutFacturaEstado = 'http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=UpdateEstadoFactura';
var urlDeleteFactura = 'http://34.68.196.220:90/G9_19/Facturas/controller/Facturas.php?op=DeleteFactura';

$(document).ready(function(){
    CargarFacturas();
});


function CargarFacturas(){
    $.ajax({
        url: urlGetFacturas,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var valores = ' ';
            for(i = 0; i < MiItems.length; i++){
                valores += '<tr>'+
                '<td>'+ MiItems[i].ID +'</td>'+
                '<td>'+ MiItems[i].NUMERO_FACTURA +'</td>'+
                '<td>'+ MiItems[i].ID_SOCIO +'</td>'+
                '<td>'+ MiItems[i].FECHA_FACTURA +'</td>'+
                '<td>'+ MiItems[i].DETALLE +'</td>'+
                '<td>'+ MiItems[i].SUB_TOTAL +'</td>'+
                '<td>'+ MiItems[i].TOTAL_ISV +'</td>'+
                '<td>'+ MiItems[i].TOTAL +'</td>'+
                '<td>'+ MiItems[i].FECHA_VENCIMIENTO +'</td>'+
                '<td>'+ MiItems[i].ESTADO +'</td>'+
                '<td>'+
                '<button class="btn btn-warning" onclick = "CargarFactura('+MiItems[i].ID +')">Editar</button>'+
                '</td>'+'<td>'+
                '<button class= "btn btn-danger" onclick="EliminarFactura('+MiItems[i].NUMERO_FACTURA +')">Eliminar</button>'+
                '</td>' +
                '</tr>';            
                $('.factura').html(valores);
            }
        }
    })
}

function CargarFacturasFinalizadas(){
    $.ajax({
        url: urlGetFacturasFinalizadas,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var valores = ' ';
            for(i = 0; i < MiItems.length; i++){
                valores += '<tr>'+
                '<td>'+ MiItems[i].ID +'</td>'+
                '<td>'+ MiItems[i].NUMERO_FACTURA +'</td>'+
                '<td>'+ MiItems[i].ID_SOCIO +'</td>'+
                '<td>'+ MiItems[i].FECHA_FACTURA +'</td>'+
                '<td>'+ MiItems[i].DETALLE +'</td>'+
                '<td>'+ MiItems[i].SUB_TOTAL +'</td>'+
                '<td>'+ MiItems[i].TOTAL_ISV +'</td>'+
                '<td>'+ MiItems[i].TOTAL +'</td>'+
                '<td>'+ MiItems[i].FECHA_VENCIMIENTO +'</td>'+
                '<td>'+ MiItems[i].ESTADO +'</td>'+
                '<td>'+
                '<button class="btn btn-warning" onclick = "CargarFactura('+MiItems[i].ID +')">Editar</button>'+
                '</td>'+'<td>'+
                '<button class= "btn btn-danger" onclick="EliminarFactura('+MiItems[i].NUMERO_FACTURA +')">Eliminar</button>'+
                '</td>' +
                '</tr>';
                $('.factura').html(valores);
            }
        }
    })
}

function CargarFacturasAnuladas(){
    $.ajax({
        url: urlGetFacturasAnuladas,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var valores = ' ';
            for(i = 0; i < MiItems.length; i++){
                valores += '<tr>'+
                '<td>'+ MiItems[i].ID +'</td>'+
                '<td>'+ MiItems[i].NUMERO_FACTURA +'</td>'+
                '<td>'+ MiItems[i].ID_SOCIO +'</td>'+
                '<td>'+ MiItems[i].FECHA_FACTURA +'</td>'+
                '<td>'+ MiItems[i].DETALLE +'</td>'+
                '<td>'+ MiItems[i].SUB_TOTAL +'</td>'+
                '<td>'+ MiItems[i].TOTAL_ISV +'</td>'+
                '<td>'+ MiItems[i].TOTAL +'</td>'+
                '<td>'+ MiItems[i].FECHA_VENCIMIENTO +'</td>'+
                '<td>'+ MiItems[i].ESTADO +'</td>'+
                '<td>'+
                '<button class="btn btn-warning" onclick = "CargarFactura('+MiItems[i].ID +')">Editar</button>'+
                '</td>'+'<td>'+
                '<button class= "btn btn-danger" onclick="EliminarFactura('+MiItems[i].NUMERO_FACTURA +')">Eliminar</button>'+
                '</td>' +
                '</tr>';
                $('.factura').html(valores);
            }
        }
    })
}

function AgregarFactura(){
    var datosfactura ={
        ID: $('#ID').val(),
        NUMERO_FACTURA: $('#NUMERO_FACTURA').val(),
        ID_SOCIO: $('#ID_SOCIO').val(),
        FECHA_FACTURA: $('#FECHA_FACTURA').val(),
        DETALLE: $('#DETALLE').val(),
        SUB_TOTAL: $('#SUB_TOTAL').val(),
        TOTAL_ISV: $('#TOTAL_ISV').val(),
        TOTAL: $('#TOTAL').val(),
        FECHA_VENCIMIENTO: $('#FECHA_VENCIMIENTO').val()
    };

    var datosfacturajson = JSON.stringify(datosfactura);

    $.ajax({
        url: urlPostFactura,
        type: 'POST',
        data: datosfacturajson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    })
    alert("Factura Agregada");

}

function CargarFactura(ID){
    var datosfactura ={
        id: ID
    };

    var datosfacturajson= JSON.stringify(datosfactura);

    $.ajax({
        url: urlGetFactura,
        type: 'POST',
        data: datosfacturajson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            var MiItems = response;
            document.getElementById('ID').disabled=true;
            $('#ID').val(MiItems[0].ID);
            document.getElementById('NUMERO_FACTURA').disabled=true;
            $('#NUMERO_FACTURA').val(MiItems[0].NUMERO_FACTURA);
            document.getElementById('ID_SOCIO').disabled=true;
            $('#ID_SOCIO').val(MiItems[0].ID_SOCIO);
            document.getElementById('FECHA_FACTURA').disabled=true;
            $('#FECHA_FACTURA').val(MiItems[0].FECHA_FACTURA);
            $('#DETALLE').val(MiItems[0].DETALLE);
            document.getElementById('SUB_TOTAL').disabled=true;
            $('#SUB_TOTAL').val(MiItems[0].SUB_TOTAL);
            document.getElementById('TOTAL_ISV').disabled=true;
            $('#TOTAL_ISV').val(MiItems[0].TOTAL_ISV);
            document.getElementById('TOTAL').disabled=true;
            $('#TOTAL').val(MiItems[0].TOTAL);
            document.getElementById('FECHA_VENCIMIENTO').disabled=true;
            $('#FECHA_VENCIMIENTO').val(MiItems[0].FECHA_VENCIMIENTO);

            var txtbestado = '<label for="">Estado</label>'+
            '<input type="text" id="ESTADO" class="form-control">';
            $('.ESTADO').html(txtbestado);
            $('#ESTADO').val(MiItems[0].ESTADO);


            var btnactualizar = '<input type="submit" id="btn_actualizar" onclick="ActualizarFactura(' + MiItems[0].ID + ')" value="Actualizar Factura" class="btn btn-primary"></input>';
            $('.button').html(btnactualizar);
        }
    })

}

function ActualizarFactura(ID){
    var datosfactura ={
        valor: $('#DETALLE').val(),
        id: ID
    };

    var datosfacturajson = JSON.stringify(datosfactura);

    $.ajax({
        url: urlPutFacturaDetalle,
        type: 'PUT',
        data: datosfacturajson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    })
    ActualizarEstado(ID);    
}

function ActualizarEstado(ID){
    var datosfactura ={
        valor: $('#ESTADO').val(),
        id: ID
    };

    var datosfacturajson = JSON.stringify(datosfactura);

    $.ajax({
        url: urlPutFacturaEstado,
        type: 'PUT',
        data: datosfacturajson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    })
    alert('Factura Actualizada');
}


function EliminarFactura(NUMERO_FACTURA){
    var datosfactura ={
        numero_factura: NUMERO_FACTURA
    };

    var datosfacturajson = JSON.stringify(datosfactura);

    $.ajax({
        url: urlDeleteFactura,
        type: 'DELETE',
        data: datosfacturajson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    })
    alert('Factura Eliminada');
    CargarFacturas();
}

