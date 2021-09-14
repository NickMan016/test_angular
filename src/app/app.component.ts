import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// const converter = require('xml-js');
import * as converter from 'xml-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';


  constructor(
    private _httpClient: HttpClient
  ) {
    this.getToken();
  }

  

  getToken() {
    const xml = `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <obtenerToken xmlns="http://com.gs.gsautos.ws.autenticacion">            
            <arg0 xmlns="">
                <usuario>ATC0</usuario>
		<password>2r2kGdeUA0</password>
            </arg0>
        </obtenerToken>
    </Body>
</Envelope>
`;
    this._httpClient.post('https://serviciosgs.mx/gsautos-ws/soap/autenticacionWS?wsdl', xml, { headers: { 'Content-Type': 'text/xml; charset=utf-8'}, responseType: 'text' } ).subscribe((response) => {
      const result = converter.xml2js(response);
      console.log(result);
      
    });
  }
  
}
