from django import forms

class WastewaterForm(forms.Form):
    bod5 = forms.FloatField(label='BOD5', required=False)
    cod = forms.FloatField(label='COD', required=False)
    tss = forms.FloatField(label='TSS', required=False)
    tds = forms.FloatField(label='TDS', required=False)
    no2 = forms.FloatField(label='NO2', required=False)
    no3 = forms.FloatField(label='NO3', required=False)
    nh3 = forms.FloatField(label='NH3', required=False)
    nh4 = forms.FloatField(label='NH4', required=False)
    fog = forms.FloatField(label='FOG', required=False)
