# Generated by Django 4.2 on 2023-05-01 16:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Road',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Unit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=150)),
                ('road', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='road.road')),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(auto_now_add=True)),
                ('road', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='road.road')),
                ('unit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='road.unit')),
            ],
        ),
        migrations.CreateModel(
            name='Accident',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(max_length=200)),
                ('handled', models.BooleanField(default=False)),
                ('imag', models.ImageField(blank=True, null=True, upload_to='images')),
                ('road', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='road.road')),
                ('unit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='road.unit')),
            ],
        ),
    ]
