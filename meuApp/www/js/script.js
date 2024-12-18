/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function somaValor(valor, qualcampo) {
    let campo = document.getElementById(qualcampo);
    campo.value = (parseFloat(campo.value) || 0) + valor;
    calculaTotal();
}

function somaConsumo(valor) {
    let campo = document.getElementById('consumoCombustivel');
    campo.value = (parseFloat(campo.value) || 0) + valor;
    calculaTotal();
}

function calculaTotal() {
    let valorGasolina = parseFloat(document.getElementById('valorGasolina').value) || 0;
    let valorRecebido99 = parseFloat(document.getElementById('valorRecebido99').value) || 0;
    let valorRecebidoIndrive = parseFloat(document.getElementById('valorRecebidoIndrive').value) || 0;
    let valorRecebidoOutros = parseFloat(document.getElementById('valorRecebidoOutros').value) || 0;
    let consumoCombustivel = parseFloat(document.getElementById('consumoCombustivel').value) || 0;

    let total = valorRecebido99 + valorRecebidoIndrive+ valorRecebidoOutros - (valorGasolina * consumoCombustivel);

    document.getElementById('totalRecebido').innerText = `Total Recebido: R$${total.toFixed(2)}`;
}

function limparTela(){
    document.getElementById('valorGasolina').value = '';
    document.getElementById('valorRecebido99').value = '';
    document.getElementById('valorRecebidoIndrive').value = '';
    document.getElementById('valorRecebidoOutros').value = '';
    document.getElementById('consumoCombustivel').value = '';
    document.getElementById('totalRecebido').innerText = 'Total Recebido: R$0.00';
}