/**
 * Created by blake on 28/11/2016.
 */
import ContactPoint = fhir.ContactPoint;
import Address = fhir.Address;

export class PatientDTO{
  id: string;
  title?: string;
  givenName: string;
  familyName: string;
  birthDate: string;
  age: string;
  gender: string;
  homeNumbers: Array<string>;
  workNumbers: Array<ContactPoint>;
  mobileNumbers: Array<ContactPoint>;
  emailAddresses: Array<ContactPoint>;
  addresses: Array<Address>;
}
