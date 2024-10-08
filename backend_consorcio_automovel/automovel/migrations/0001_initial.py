# Generated by Django 5.1.1 on 2024-09-14 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Automovel',
            fields=[
                ('chassi', models.CharField(max_length=17, primary_key=True, serialize=False)),
                ('modelo', models.CharField(max_length=100)),
                ('nome', models.CharField(max_length=100)),
                ('preco', models.DecimalField(decimal_places=2, max_digits=10)),
                ('cor', models.CharField(max_length=50)),
                ('imagem', models.ImageField(blank=True, null=True, upload_to='automoveis/')),
            ],
        ),
    ]
